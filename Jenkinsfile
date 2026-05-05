pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                // When connected to GitHub, Jenkins automatically checks out the code here
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Example: sh 'npm install' or 'mvn clean install'
                sh 'echo "Hello from the Build stage!"'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running unit tests...'
                // Example: sh 'npm test'
                sh 'echo "Tests passed securely!"'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying to staging environment...'
                // Because we installed Docker CLI and mounted the socket, 
                // you could even run Docker commands here!
                sh 'docker --version'
            }
        }
    }
    
    post {
        always {
            echo 'This runs no matter what happens (e.g., cleaning up workspace)'
        }
        success {
            echo 'Pipeline completed successfully! 🎉'
        }
        failure {
            echo 'Pipeline failed! 🚨'
        }
    }
}
