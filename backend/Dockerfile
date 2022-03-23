FROM mongo

EXPOSE 27017

#I don't think we need auth 
ENV MONGO_INITDB_ROOT_USERNAME=albertolp
ENV MONGO_INITDB_ROOT_PASSWORD=albertolp

#To build this docker file
#docker build -t="mongo/advanced-app" .

#To run a container with a built image and specifying the volume (absolute path this case is windows)
# docker run -d -p 27017:27017 -v C:\Users\<user-name>\Desktop\workdir\advanced-app\data-db:/data/db --name mongo_advancedApp mongo/advanced-app
