pipeline {
  agent {
    docker {
      image 'node:20-alpine'
    }
  }

  environment {
    APP_DIR = 'jenkins-app'
    // Force npm cache to a writable place (prevents /.npm EACCES)
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    HOME = "${WORKSPACE}"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        dir("${APP_DIR}") {
          sh 'rm -rf node_modules'
          sh 'node -v'
          sh 'npm -v'
          sh 'npm ci --cache "$NPM_CONFIG_CACHE" || npm install --cache "$NPM_CONFIG_CACHE"'
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
      archiveArtifacts artifacts: "${env.APP_DIR}/dist/**", allowEmptyArchive: true
publishHTML(target: [
  reportDir: "${env.APP_DIR}/dist",
  reportFiles: "index.html",
  reportName: "Vite Site",
  keepAll: true,
  alwaysLinkToLastBuild: true,
  allowMissing: false
])

    }
  }
}
