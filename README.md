

# 3News API Frontend  

This is the Angular frontend for the **3News API**, a project powered by large language models (LLMs) via LangChain and OpenAI. The frontend serves as a user interface to access the latest news articles across five categories: local, international, business, tech, and sports.  



## **Disclaimer**  

At the current moment, the application is not displaying the latest news because it uses the `gpt-4-turbo` model, which does not have access to live news data. Instead, the news data available is up to **April 2023**. However, newer versions of the model with live data capabilities can be integrated in the future to provide up-to-date news.  



## Features  

### Components  

1. **News Component**  
   - Located under `src/app/News/`.  
   - A wrapper component that contains:
     - A **form** to generate news based on the selected news type and location.  
     - The **news container**, which displays the fetched articles.  
   - Handles user input and interacts with the backend API to fetch and display news dynamically.

2. **NewsClient Service**  
   - A service located in `src/app/services/NewsClient.service`.  
   - Provides a `getNews(newsType: string, location: string)` method, which:
     - Sends an HTTP request to the API endpoint.
     - Accepts `newsType` and `location` as parameters.
     - Returns an observable containing the news data.



## Setup Instructions  

### 1. Clone the Repository  
Start by cloning the repository to your local machine:  
```bash  
git clone git@github.com:TheAttentionSeeker5050/3-news-backend-fastAPI-LangChain-LLM.git <new-repository-folder>
cd <new-repository-folder>  
```  

### 2. Install Dependencies  
Use `npm` to install all the required dependencies:  
```bash  
npm install  
```  

### 3. Build and Watch for Changes  
To build the project in development mode and automatically watch for changes:  
```bash  
npm run watch  
```  

### 3.5. Build the Project for Production (Optional)
Generate a production-ready build by running:  
```bash  
npm run build  
```  

### 4. Serve the Application  
To serve the Angular application locally for development or production testing:  
```bash  
npm run start  
```  

### 5. Test the API Integration (Optional)  
The frontend interacts with the **3News API** for fetching news data. Make sure the API server is running. You can test the API separately by sending a POST request to `http://localhost:8000/news` with the following sample JSON body:  

```json  
{
    "news_type": "local",
    "location": "Berlin, Germany"
}
```  

#### Example cURL Request:  
```bash  
curl -X 'POST' \
  'http://localhost:8000/news' \
  -H 'Content-Type: application/json' \
  -d '{
  "news_type": "local",
  "location": "Berlin, Germany"
}'
```  



## Response Format  

The API returns a JSON array with the following keys:  

- **name**: The title of the news article.  
- **content**: A summary of the article.  
- **source**: The news source or publisher.  
- **date**: The date the article was published.  

#### Example API Response:  
```json  
[
    {
        "name": "Nova Scotia Government Announces New Environmental Policy",
        "content": "The government of Nova Scotia has introduced a new environmental policy aimed at reducing carbon emissions by 50% over the next decade.",
        "source": "CBC News",
        "date": "2023-09-28"
    },
    {
        "name": "Major Traffic Revisions in Halifax Starting Next Week",
        "content": "Starting next Monday, major traffic revisions will be implemented in downtown Halifax.",
        "source": "Halifax Chronicle-Herald",
        "date": "2023-09-28"
    },
    {
        "name": "Nova Scotia Schools to Implement New STEM Curriculum",
        "content": "Nova Scotia's Department of Education has announced the rollout of a new STEM-focused curriculum in all public schools.",
        "source": "Global News",
        "date": "2023-09-28"
    }
]
```  



## File Structure  

The Angular project is structured as follows:  
```
src/
├── app/
│   ├── News/                # News wrapper component
│   │   ├── news.component.ts  # Main component file
│   │   ├── news.component.html # Template file
│   │   ├── news.component.scss # Styles file
│   ├── services/            # Services for API interaction
│   │   └── NewsClient.service.ts  # Service to interact with the backend API
│   ├── models/              # TypeScript interfaces for data models
│   ├── app.module.ts        # Main application module
│   ├── app.component.ts     # Root component
├── assets/                  # Static assets like images and icons
├── environments/            # Environment configuration files
```  
