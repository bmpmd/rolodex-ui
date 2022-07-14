# declare node as the base image so we can run npm install 
FROM node:14.15.0 as builder 
# you can find node's correct image by looking up versions of node on docker 

#copy the json files into root of container 
# and run npm install to pull the node module 
# and copy all the node modules into the container 
# and build once everything has been done into the dist folder 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# pass off the static resources to a web server (nginx)
# nginx 
FROM nginx:1.15-alpine

# pass the distributable artifact to nginx to host 
#ROLODEX UI MUST MATCH w name of project!
COPY --from=builder /usr/src/app/dist/rolodex-ui/ /usr/share/nginx/html

#to run the continaer, after building the image, 
# run docker run -p 8080:80 <name-of-image:version>
# (80 is the default nginx port )




