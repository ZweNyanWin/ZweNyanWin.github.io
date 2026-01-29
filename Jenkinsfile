pipeline {
  agent {
    docker { image 'node:20-alpine' }
  }

  environment {
    APP_DIR = 'jenkins-app'
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        dir("${APP_DIR}") {
          sh 'node -v'
          sh 'npm -v'
          sh 'npm ci || npm install'
        }
      }
    }

    stage('Test') {
      steps {
        dir("${APP_DIR}") {
          sh 'npm test || true'
        }
      }
    }

    stage('Build') {
      steps {
        dir("${APP_DIR}") {
          sh 'npm run build'
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: "${APP_DIR}/dist/**", fingerprint: true, allowEmptyArchive: true
    }
  }
}
