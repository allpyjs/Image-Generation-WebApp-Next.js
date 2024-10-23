# Next.js AI Image Generator with DALL-E and ChatGPT 🎨🤖
### React Native port w/ Mobile APP available: [Image-Generate-Mobile](https://github.com/allpyjs/Image-Generation-Mobile-App)

![Preview](web.png)


## Features 💡
* Generate images from text prompts using OpenAI's DALL-E
* Receive prompt suggestions from OpenAI's ChatGPT
* Serverless API backends with Microsoft Azure Function App HTTP triggers
* Image storage using Microsoft Azure Storage Account (blob container)
* Deployed on Azure (back-end) and Vercel (front-end)

## Prerequisites 📋
To clone and run this project, you'll need the following:

* An OpenAI account with API key for DALL-E and ChatGPT access
* A Microsoft Azure account for Function App and Storage Account setup
* Your local environment file (.env) configured with the required API keys and credentials

## Getting Started 🚀
1. Clone this repository:
`git clone https://github.com/allpyjs/Image-Generation-WebApp-Next.js.git`
2. Install dependencies:
`npm install`

3. Make sure you created your Function App and Storage account for this project on Azure. In your Azure Storage account, create a blob container called `images`. Map your Function App & Storage Account to the project's `azure` folder under the root folder.

4. Configure your local environment file (.env.local) with the required API keys and credentials:


```
# .env.local
OPEN_AI_ORG=org-your_open_ai_account  
OPEN_AI_API_KEY=your_open_ai_key  

# Azure remote house, uncomment one below:
# REMOTE_HOST=your_azure_remote_host_url (For deployment)
# REMOTE_HOST=http://127.0.0.1:7071 	(Dev server only)
# IMG_GEN_URL=https://yourdomain.com    (Leave blank if none)
# IMG_GEN_DOMAIN=yourdomain.com         (Leave blank if none)
# DEV_PREVIEW_URL=devpreview.yourvercelurl.com  (Leave blank if none)
# OG_IMAGE=https://youropengraphimage.png

# // API endpoint e.g. /api/getImages
API_GENERATE_IMAGE=your_generateImage_api_endpoint
API_GET_IMAGES=your_getImages_api_endpoint
API_GET_SUGGESTIONS=your_getChatGPTSuggestion_api_endpoint

# // Google Analytics Measurement ID
GA_ID=
```

> If you need to find your Storage account access key: Go to Azure Portal > Your Storage account > Security + networking > Access key.

5. Install dependencies inside the Azure folder
`cd azure && npm install`

6. In VSCode click `Windows: Control + P / Mac: Command + P` and type `Azure Functions: Download Remote Settings...`

7. Add the lines `OPEN_AI_ORG` & `OPEN_AI_API_KEY` from your project `.env` file to `azure`'s `local.settings.json`

8. Run the local Azure development server `cd azure && npm run start`, then it should run at `http://localhost:7071`. Unless your Azure backend is deployed, make sure to use set `http://127.0.0.1:7071` as the value for env variable `REMOTE_HOST`. 

9. Run the development server from the project's root directory:
`npm run dev`

10. Open your browser and navigate to http://localhost:3000 to see the app running.

## Deployment 🌐
### Front-end (Vercel)
To deploy the front-end on Vercel, follow these steps:

1. Sign up or log in to your Vercel account.
2. Connect your GitHub account and import the repository.
3. Deploy your project with terminal command `vercel`.
4. Configure your environment variables in the Vercel dashboard, matching the local .env file.

### Back-end (Azure Functions)
To deploy the back-end on Azure Functions, follow these steps:

1. Sign up or log in to your Microsoft Azure account.
2. Create a new Function App and configure it with your preferred runtime, operating system, and hosting plan.
3. Deploy your Function App using your preferred method (e.g., Git, Visual Studio Code, Azure Functions Core Tools).
4. Configure the required environment variables in the Function App's "Application settings" to match your local .env file.
5. Deploy your Function App using VSCode command line and use `Azure Functions: Deploy to Function App...`

