# Demo 1 - React-perusteita

### 1. React-komponentin rakenne

```tsx
function MyComponent() {

  const [message, setMessage()] = useState<string>("Hello World!");

  return (
    <>
      <h2>{message}</h2>
    </>
  );
}

export default MyComponent;
```

### 2. Syötteen sijoittaminen tilamuuttujaan

```tsx
function MyComponent() {

  const [name, setName] = useState<string>("");

  return (
    <>
      <input
        type="text"
        onChange={ (e) => { setName(e.target.value); } }
      />

      <p>Hello, {name}!</p>
    </>
  );
}
```

### 3. Button, OnClick ja ehdollinen tulostus

```tsx
function MyComponent() {

  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const sayHi = () => {
    setMessage(`Hello, {name}!`);
  }

  return (

    <input
      type="text"
      onChange={ (e) => {setName(e.target.value)} }  
      
    />

    <button
      onClick={sayHi}
    >Say hi</button>

    {(Boolean(message)) && <p>{message}</p>}
  );
}
```

### 4. Node-moduulien, tyylitiedostojen ja komponenttien tuonti

```tsx
import { useState } from 'react';
import './App.css';
import MyOtherComponent from './MyOtherComponent.tsx'

function MyComponent() {

  const [myConst, seMyConst] = useState<string>("");

  return (
    <>
    <h1 className={"title"}>My Component</h1>

    <MyOtherComponent />
    </>
  );
}

```