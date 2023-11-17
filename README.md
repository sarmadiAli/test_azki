# Project Title: Next.js with TypeScript for Task Senior Front-End Developer

## Overview

This project is a Next.js application developed with TypeScript to fulfill the tasks assigned by Azki Company. The deployment process involves a continuous integration/continuous deployment (CI/CD) pipeline from GitHub to Vercel.

## Deployment Process

### 1. Development Environment

- Clone the repository:`bash git clone https://github.com/sarmadiAli/test_azki`
- Install project dependencies using `npm install`.
- Run the project locally using `npm run dev`.
- Install Vercel CLI for local testing.

### 2. Code Quality Checks

- preCommit and prePust check Eslint
- Ensure linting is in place by running `npm run lint`.

### 3. CI/CD Workflow

The CI/CD pipeline is triggered on GitHUb. The following steps are executed:

#### Step 1: Pull Vercel Environment Information

- Retrieve Vercel environment information.

#### Step 2: Build Project Artifacts

- Build project artifacts to prepare for deployment.

#### Step 3: Deploy Project Artifacts to Vercel

- Deploy project artifacts to Vercel using the Vercel CLI.

### 4. Manual Deployment

Deployment is also possible by pushing tags and updating the server.

- Push tags using `git push origin <tag_name>`.
- Update the server with the latest changes.

## Accessing the Deployed Application

The application is deployed at [https://test-azki.vercel.app//](https://test-azki.vercel.app//).

## Technologies Used

- TypeScript
- React
- React-Context
- Next
- react-query
- react-hook-form
- Material UI
- eslint
- husky
- lint-staged
- prettier
