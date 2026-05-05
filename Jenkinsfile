pipeline {
    agent any
    
    environment {
        // Variables for our docker image
        IMAGE_NAME = "jenkins-practice-app"
        IMAGE_TAG = "${env.BUILD_NUMBER}" // Built-in Jenkins variable (e.g. 1, 2, 3...)
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                // Jenkins automatically pulls the latest code from GitHub here
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo "Building Docker Image: ${IMAGE_NAME}:${IMAGE_TAG}..."
                // This builds the image using the Dockerfile we just created
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest"
            }
        }
        
        stage('Deploy Container') {
            steps {
                echo 'Stopping existing container if it exists...'
                // || true ensures it doesn't fail if this is the first run and no container exists
                sh 'docker rm -f practice-app-container || true'
                
                echo 'Starting new container...'
                // This deploys our new Node.js app on port 3000
                sh "docker run -d --name practice-app-container -p 3000:3000 ${IMAGE_NAME}:latest"
            }
        }
    }
    
    post {
        success {
            echo "Success! The pipeline built the Docker image and deployed it."
        }
        failure {
            echo "Pipeline failed! Check the Jenkins logs."
        }
    }
}
