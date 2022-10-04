#!/usr/bin/env bash

rm -rf build/
echo "Deleted build/ folder"

./gradlew bootJar
echo "Generating jar file"

#Copy execute_commands_on_ec2.sh file which has commands to be executed on server... Here we are copying this file
# every time to automate this process through 'deploy.sh' so that whenever that file changes, it's taken care of
scp -i "~/Downloads/myKeyPair.pem" execute_commands_on_ec2.sh ec2-user@ec2-18-215-148-186.compute-1.amazonaws.com:/home/ec2-user
echo "Copied latest 'execute_commands_on_ec2.sh' file from local machine to ec2 instance"

scp -i "~/Downloads/myKeyPair.pem" build/libs/demo-0.0.1-SNAPSHOT.jar ec2-user@ec2-18-215-148-186.compute-1.amazonaws.com:/home/ec2-user
echo "Copied jar file from local machine to ec2 instance"

echo "Connecting to ec2 instance and starting server using java -jar command"
ssh -i "myKeyPair.pem" ec2-user@ec2-18-215-148-186.compute-1.amazonaws.com ./execute_commands_on_ec2.sh
