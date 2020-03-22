# Setting Up SSG With Next.js

In a new folder/repo:
```shell script
mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
mkdir pages #this is where ssg pages go
```

Add to package.json:
```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

Create a page, for example pages/index.jsx
```javascript
export default function Index() {
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
}

```
Run the server locally
```shell script
npm run dev
```

Visit the webpage locally: http://localhost:3000

