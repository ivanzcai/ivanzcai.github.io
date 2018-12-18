---
layout: post
categories: backend
author: Ivan Cai
title: Apigee Edge Microgateway on Docker & Kubernetes
permalink: /:categories/:title
---

# Apigee Edge Microgateway on Docker & Kubernetes
This project describe how you can setup multiple Apigee Edge Microgateways using proxy filters, docker and Kubernetes. 


## Prerequisites
1. Docker installation. For more info please visit [Docker home page](https://www.docker.com/get-docker)
2. Account with Apigee and understanding how to setup Edge Microgateway proxies. Please see [Edge Microgateway Documentation](https://docs.apigee.com/api-platform/microgateway/2.5.x/overview-edge-microgateway) for more information
2. Node.js 4.x or later. For more info visit [Nodejs Github Release Document](https://github.com/nodejs/Release)
3. Basic understanding and experience of Docker
4. If you choose to run it in a Kubernetes environment, you will need to have some experience with [Kubernetes](https://kubernetes.io/)



## Section 1 - Configuration Preperation 
This section is to set up two Edge Microgateway aware proxies to demonstrate how we can deploy seperate microgateway containers to be used for seperate proxy endpoints by utilizing proxy filters. 

   1. Create two Microgateway aware reverse proxies in your existing Apigee portal:
      * edgemicro_firstproxy
        * Proxy Name: edgemicro_firstproxy
        * Proxy Base Path: firstproxy
        * Existing API http://httpbin.org/

      * edgemicro_secondproxy
        * Proxy Name: edgemicro_secondproxy
        * Proxy Base Path: secondproxy
        * Existing API http://httpbin.org/


2. In this step, you will generate a key, secret and the {org}-{env}-config.yaml for later use. This section assumes you already have node.js and npm installed on your localhost or server.
  
      Please open a terminal in your localhost/server and do the following:
    
    * Install Edge microgateway
      
    ```
    npm install -g edgemicro
    ```
      
    * Initialize Edge microgateway
    
    ```
    edgemicro init
    ```
    
    * Configure Edge microgateway and save the key and secret for later use. 
    
    ```
    edgemicro configure -o "your-orgname" -e "your-envname" -u "your-username"
    ``` 
    * If the configuration is successful, you will see a key, secret and token being displayed. The **{org}-{env}-config.yaml** file has also been generated in the  **~/.edgemicro** directory.

    * Save the key, secret and token in a text file of your choice for later use.

    
   

## Section 2 - Build docker images
The steps in this section are to build Docker container images. To complete this section, you will need a Docker hub account(or equivalent). 

1. In your localhost or server, change directory to .edgemicro. Run ```cd ~/.edgemicro/```
2. Clone the project
```git clone https://github.com/zcai2672/apigee-edgemicro-docker.git```

3. Copy the {org}-{env}-config.yaml generated in the **Section 1 - Configuration Preperation** to the 'apigee-edgemicro-docker' folder created from the previous step.

4. Switch directory
```cd apigee-edgemicro-docker```

5. Add ```proxyPattern: edgemicro_firstproxy*``` to the edge_config member in the {org}-{env}-config.yaml
    ```
    edge_config:
      proxyPattern: edgemicro_firstproxy*
      .
      .
      . omitted for brevity
    ```
6. Build the docker image using following command:
```docker build --build-arg ORG="your-orgname" --build-arg ENV="your-env" -t microgateway:first .```

7. Run ```docker images``` to get the IMAGE_ID of the container image created in previous step. 

8. Tag the image ```docker tag <image_id> <docker_hub_id>/microgateway:first``` 

9. Login to docker hub, run ```docker login```

10. Push the image to a container register such as Docker Hub (you can also use Google Container Register)
```docker push <docker_hub_id>/microgateway:first``` 

11. Now edit the {org}-{env}-config.yaml file again by changing the proxyPattern configuration to 'edgemicro_secondproxy*' ```proxyPattern: edgemicro_secondproxy*``` in the edge_config member in the {org}-{env}-config.yaml
    ```
    edge_config:
      proxyPattern: edgemicro_secondproxy*
      .
      .
      . omitted for brevity
    ```
12. Build the docker image using following command:
```docker build --build-arg ORG="your-orgname" --build-arg ENV="your-env" -t microgateway:second .```

13. Run ```docker images``` to get the IMAGE_ID of image created in previous step. 

14. Run ```docker tag <image_id> <docker_hub_id>/microgateway:second``` 

15. push the images to a container register such as Docker Hub or Google Container register
```docker push <docker_hub_id>/microgateway:second```


## Section 3 - Deployments

You have two deployment options in this section, You can choose to deploy docker only in option 1 or you can deploy your images in a Kubernetes environment. 

### Option 1 - Docker only deployment

For this option, you will be deploying two Docker container images, microgateway:first in port 8000 and microgateway:second in port 8001

You can run the the microgateway image in same local environment that you have previously set up. 

1. To start running  microgateway:first image
```
docker run -d -p 8000:8000 -e EDGEMICRO_ORG="your-orgname" -e EDGEMICRO_ENV="your-env" -e EDGEMICRO_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" -e  EDGEMICRO_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" -P -it microgateway:first
```

2. To test, run ``` curl http://localhost:8000/firstproxy/anything ``` 
    
    If deployment is successful, you should see something like this
    ```
    {"error":"missing_authorization","error_description":"Missing Authorization header"}
    ```    
    To test if the filter is working, run ``` curl http://localhost:8000/secondproxy/anything ``` 
    You should get the following if the proxy filter that you have configured works. 
    ```
    {"message":"no match found for /secondproxy/anything","status":404}
    ```

3. Deploy the second gateway microgateway:second image
```docker run -d -p 8001:8000 -e EDGEMICRO_ORG="your-orgname" -e EDGEMICRO_ENV="your-env" -e EDGEMICRO_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" -e  EDGEMICRO_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" -P -it microgateway:second```

4. To test, run ``` curl http://localhost:8001/secondproxy/anything ``` 
    
    you should see something like this
    ```
    {"error":"missing_authorization","error_description":"Missing Authorization header"}
    ```    
    Then run ``` curl http://localhost:8001/firstproxy/anything ``` to test the filter you have configured for this proxy. 
      You should get the following if your filter works. 
      ```{"message":"no match found for /firstproxy/anything","status":404}```



### Option 2 - Docker in GCP Kubernetes deployment 

You will need to a Google Cloud platform Account for this option. A local Kubernetes installation should also work but has not been tested at this stage. 

1. Login to your GCP console, create your Kubernetes cluster under Kubernetes Engine section. 

2. Run the following command to clone the Microgate way project
```git clone https://github.com/zcai2672/apigee-edgemicro-docker.git```
3. Switch directory
```cd apigee-edgemicro-docker```

10. Create Kubernetes secret
    * Use the key and secrets generated in step 2 of **Section 1 - Configuration Preperation** and  it to to base64
Convert each of these values into base64. THis will help store those credentails into Kubernetes secrets.
      ```
      echo -n "org" | base64
      echo -n "env" | base64
      echo -n "key" | base64
      echo -n "secret" | base64
      ```
    * Use the results in the configuration in the mgw-secret.yaml

      ```
      apiVersion: v1
      kind: Secret
      metadata:
        name: mgwsecret
      type: Opaque
      data:
        mgorg: xxxxxx
        mgenv: xxxxxx
        mgkey: xxxxxx
        mgsecret: xxxxxx
      ```
       Run this file in your kubernetes environment to create the secret configuration
       ``` 
       kubectl create -f  mgw-secret.yaml
       ```
      For more info on Kubernetes secrets, please see [Kubernetes Secret Doc](https://kubernetes.io/docs/concepts/configuration/secret/)
     
      You can check if the secret creation by issuring the following command
      ```
      kubectl get secrets
      ```
      You will see something similar to this:

      ```
      NAME           TYPE       DATA      AGE
      mgwsecret      Opaque     4         23h
      ```

      
11. Create Kubernetes microgateway pods.

    Open mgw-pod-first.yaml and mgw-pod-second.yaml. 
    Update the placeholder for the 'image' member to point to the correct docker container registry location (In Step 8) for file mgw-pod-first.yaml and mgw-pod-second.yaml files. 

    
   

     If you are using Docker hub, make sure you are logged in

    ```
    docker login
    ```

    Run the script to create the pods
      
    ```
    kubectl create -f mgw-pod-first.yaml
    ```

      ```
    kubectl create -f mgw-pod-second.yaml
    ```

    Check if the pods has been created
    ```
    kubectl get pods
    ```
    You will see something like this: 
    ```
    NAME                                  READY     STATUS    RESTARTS   AGE
    edge-microgateway-first               1/2       Running   0          17h
    edge-microgateway-second              1/2       Running   0          17h
    ```  

    

12. Create Kubernetes microgateway Service to expose the gateway

    Make sure that your selector is configured to point to the pod labels member from the step above. 
    ```
    apiVersion: v1
    kind: Service
    metadata:
      name: edge-microgateway
      labels:
        app: edge-microgateway
    spec:
      ports:
      - port: 8000
        name: http
      selector:
        app: edge-microgateway

    ```
    Check if service has been created 

    ```
    kubectl get services 
    ```
    You should see something like this: 
    ```
    NAME                TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
    edge-microgateway   LoadBalancer   xx.xx.xx.xx     xx.xx.xx.xx     8000:31827/TCP   17h
    kubernetes          ClusterIP      10.59.240.1     <none>          443/TCP          1d
    ```


    To test the service endpoint, please make sure you are using a terminal on a seperate server or your local machine. Use generated external ip obtained from the previous step and run:
    ```
    curl -v http://<EXTERNAL-IP>:8000/firstproxy/anything -v
    ```
    If the deployment is successful you should be see something like this:

    ```
    {"error":"missing_authorization","error_description":"Missing Authorization header"}
    ```


