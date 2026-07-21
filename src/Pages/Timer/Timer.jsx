// import { useEffect } from "react";
// import { useState } from "react";
// //1.first component timer run karega//
// const Timer = () => {
//   //2.phir yeh line execute hogi// react memory main state create karega date=0 and setdate() function dega
//   const [date, setDate] = useState(0);

//   useEffect(() => {
//     //4. Ab Ui matalab return chalne ke baad matlab yeh render ke baad clega qki dependecy array khali hain or yeh
//     // ek hi baar clega is case  main.

//     //5. ab setInterval wali line execute hogi, browser timer create karta hain or browser ex- id=1 dega memory main khali store hoga

//     const id = setInterval(() => {
//       const updateDate = new Date();
//       setDate(updateDate.toLocaleTimeString());
//       console.log(id, "Get Id");
//     }, 3000);

//     //6. abd yeh return wali line execute hogi clegi nahi react is fucntion ko save kar leta hain future ke liye
//     //yeh sirf component anmount ya dependenci array change hone par clega.
//      clearInterval(id);
//   }, [date]);

//   return (
//     <>
//     {/* //3.Ab jsx return karega and screen main h1 and p chalege// */}
//       <h1>I am h1</h1>
//       <p> Date: {date}</p>
//     </>
//   );
// };

// export default Timer;

// note-useEffect([], ...)
// Effect sirf ek baar (mount par) chalta hai. Ek hi interval banta hai aur cleanup sirf unmount par hota hai.

// useEffect([date], ...) Effect har date change par dobara chalta hai.React pehle cleanup (purana interval stop) karta hai,
// phir naya interval create karta hai.

//Note-Isliye ek time par sirf ek hi interval active rehta hai. Farq bas itna hai ki [] me wahi interval lifetime tak chalta hai, jabki [date]// me har
//  date update par interval ko destroy karke dobara create kiya jata hai.//

// setInterval() → Future me callback chalane ka schedule banata hai.
// clearInterval() → Us schedule ko cancel kar deta hai.

// setInterval() bhi wahi karta hai—future ke liye callback schedule karta hai. Agar uske chalne se pehle clearInterval(id) kar doge,
//  to callback kabhi execute hi nahi hoga.

//--------------------------fetch data API--------------------//

import { useEffect, useState } from "react";
import { CgLayoutGrid } from "react-icons/cg";

//-------------using async await-------------//

// const Timer = () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users";
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await fetch(apiUrl);
//     const delay = await fetch()
//     console.log(response);

//     const result = await response.json();
//     console.log(result);
//     setData(result);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <h1>API Data</h1>

//       {data.map((currdata) => (
//         <p key={currdata.id}> {currdata.name} </p>
//       ))}
//     </>
//   );
// };

// export default Timer;

//------------Using promises------------//
// const Timer = () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users";
//   const [data, setData] = useState([]);

//   const getData = () => {
//     fetch(apiUrl)
//     . then((res) => (res.json())
//     .then((result) => setData(result))
//     // .catch((errror)=>console.log(errror))
//     );
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <h1>API Data</h1>

//       {data.map((currdata) => (
//         <p key={currdata.id}> {currdata.name} </p>
//       ))}
//     </>
//   );
// };

// export default Timer;

//----------post----------------//

//  const Timer = () => {
//   const apiUrl = "https://683da3f6199a0039e9e64a3e.mockapi.io/login";

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // GET METHOD
//   const getUsers = async () => {
//     const response = await fetch(apiUrl);
//     const result = await response.json();
//     return result;
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const btnSubmit = async (e) => {
//     e.preventDefault();

//     // Check empty fields
//     if (!username || !email || !password || !confirmPassword) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Check password length
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     // Check passwords match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       // GET all users
//       const users = await getUsers();

//       // Check if email already exists
//       const userExist = users.find((user) => user.email === email);

//       if (userExist) {
//         alert("email already exists");
//         return;
//       }

//       // Create new user object
//       const newUser = {
//         username,
//         email,
//         password,
//       };

//       console.log(newUser);
//       // Send new user to API
//       const postResponse = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       // console.log(postResponse)
//       const result = await postResponse.json();

//       console.log(result, " appppi Dekhhho");
//       // console.log(result.username)

//       alert("Registration Successful");

//       // Clear form
//       // setUserName("");
//       // setEmail("");
//       // setPassword("");
//       // setConfirmPassword("");
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div style={{ width: "350px", margin: "50px auto" }}>
//       <h2>Register</h2>

//       <form onSubmit={btnSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         <br />
//         <br />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
// export default Timer;

//----------put Method--------------//

// const Timer = () => {
//   const apiUrl = "https://683da3f6199a0039e9e64a3e.mockapi.io/login";

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const btnSubmit = async (e) => {
//     e.preventDefault();

//     // Check empty fields
//     if (!username || !email || !password || !confirmPassword) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Check password length
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     // Check passwords match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       // Get all users
//       const response = await fetch(apiUrl);
//       const users = await response.json();

//       // Check if email already exists
//       const userExist = users.find((user) => user.email === email);

//       if (userExist) {
//         alert("email already exists");
//         return;
//       }

//       const updateUser = {
//         username: "Rockybaba",
//         email: "rockybaba@gmail.com",
//       };

//       const updataData = await fetch(`${apiUrl}/11`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updateUser),
//       });

//       const result = await updataData.json();

//       console.log(result);

//       alert("Registration Successful");

//       // Clear form
//       // setUserName("");
//       // setEmail("");
//       // setPassword("");
//       // setConfirmPassword("");
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div style={{ width: "350px", margin: "50px auto" }}>
//       <h2>Register</h2>

//       <form onSubmit={btnSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         <br />
//         <br />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
// export default Timer;

//---------delete----------//

// const Timer = () => {
//   const apiUrl = "https://683da3f6199a0039e9e64a3e.mockapi.io/login";

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // DELETE FUNCTION
//   const deleteUser = async () => {
//     const ids = [16,17,18,19];

//     try {
//       for (const id of ids) {
//         await fetch(`${apiUrl}/${id}`, {
//           method: "DELETE",
//         });
//       }

//       alert("Users Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const btnSubmit = async (e) => {
//     e.preventDefault();

//     // Registration code...
//   };

//   return (
//     <div>
//       <form onSubmit={btnSubmit}>
//         {/* Inputs */}

//         <button type="submit">Register</button>
//       </form>

//       <button onClick={() => deleteUser(14)}>Delete User 14</button>
//     </div>
//   );
// };

// export default Timer;

//----------------crud API---------//

// const Timer = () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users";

//   const [users, setUsers] = useState([]);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [website, setWebsite] = useState("");

//   // GET
//   const getUsers = async () => {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   // POST
//   const addUser = async () => {
//     if (!name || !email || !website) {
//       alert("Please fill all fields");
//       return;
//     }

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         website,
//       }),
//     });

//     const data = await response.json();

//     setUsers([...users, data]);

//     setName("");
//     setEmail("");
//     setWebsite("");

//     alert("User Added");
//   };

//   // DELETE
//   const deleteUser = async (id) => {
//     await fetch(`${apiUrl}/${id}`, {
//       method: "DELETE",
//     });

//     setUsers(users.filter((user) => user.id !== id));

//     alert("User Deleted");
//   };

//   // PUT
//   const updateUser = async (user) => {
//     await fetch(`${apiUrl}/${user.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     alert("User Updated");
//   };

//   return (
//     <div>
//       <h2>CRUD Operation</h2>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Enter Website"
//         value={website}
//         onChange={(e) => setWebsite(e.target.value)}
//       />

//       <button onClick={addUser}>Add User</button>

//       <hr />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Website</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>

//               <td>{user.name}</td>

//               <td>
//                 <input
//                   value={user.email}
//                   onChange={(e) => {
//                     const newUsers = users.map((item) =>
//                       item.id === user.id
//                         ? { ...item, email: e.target.value }
//                         : item
//                     );

//                     setUsers(newUsers);
//                   }}
//                 />
//               </td>

//               <td>
//                 <input
//                   value={user.website}
//                   onChange={(e) => {
//                     const newUsers = users.map((item) =>
//                       item.id === user.id
//                         ? { ...item, website: e.target.value }
//                         : item
//                     );

//                     setUsers(newUsers);
//                   }}
//                 />
//               </td>

//               <td>
//                 <button onClick={() => updateUser(user)}>
//                   Update
//                 </button>

//                 <button onClick={() => deleteUser(user.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Timer;

// const Timer = () => {
//   const apiUrl = "https://683da3f6199a0039e9e64a3e.mockapi.io/login";

//   const [apiData, setApiData] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // GET
//   const getData = async () => {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     setApiData(data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // FORM SUBMIT (POST + PUT)
//   const handleFormSubmit = async (e) => {
//   e.preventDefault();

//     const userData = {
//       username,
//       email,
//       password,
//     };

//     // ================= PUT =================
//     if (editId) {
//       await fetch(`${apiUrl}/${editId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       alert("User Updated Successfully");

//       await getData();

//       //buttun pr jo edit task liya hai usko khtam karne ke liye last main null lege ab user edit mood
//       //par nahi rahega //
//       setEditId(null);
//       setUserName("");
//       setEmail("");
//       setPassword("");

//       return;
//     }

//     // ================= POST =================
//     const userEmailCheck = apiData.some(
//       (user) => user.email === email
//     );

//     if (userEmailCheck) {
//       alert("Email already exists");
//       return;
//     }

//     await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })

//     alert("User Added Successfully");

//     await getData();

//     setUserName("");
//     setEmail("");
//     setPassword("");
//   };

//   // DELETE
//   const deleteUser = async (id) => {
//     // await fetch(`${apiUrl}/${id}`, {
//     //   method: "DELETE",
//     // });

//     await fetch(`https://683da3f6199a0039e9e64a3e.mockapi.io/login/${id}`, {
//       method: "DELETE",
//     });

//     alert("User Deleted Successfully");

//     await getData();
//   };

//   // EDIT
//   const editUser = (user) => {
//     setUserName(user.username);
//     setEmail(user.email);
//     setPassword(user.password);

//     setEditId(user.id);
//   };

//   return (
//     <>
//       <h1>React CRUD</h1>

//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={username}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />

//         <button type="submit">
//           {editId ? "Update User" : "Add User"}
//         </button>
//       </form>

//       <hr />

//       {apiData.map((user) => (
//         <div
//           key={user.id}
//           style={{
//             border: "1px solid black",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//           <h3>{user.username}</h3>
//           <p>{user.email}</p>
//           <p>{user.password}</p>

//         <button onClick={()=>editUser(user)}>
//           EDIT
//         </button>

//           <button
//             onClick={() => deleteUser(user.id)}
//             style={{ marginLeft: "10px" }}
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Timer;

const Timer = () => {
const apiUrl = "https://683da3f6199a0039e9e64a3e.mockapi.io/login";

  const [apiData, setApiData] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
  const[error,setError]  = useState("")

  //get method//
  const getData = async () => {
  
    try{
   
    const response = await fetch(apiUrl);
    if(!response.ok){
      throw new Error("failed to fetch data")
    }
    const data = await response.json();
     setApiData(data);

    }catch(err){
          console.log(err.message)
          setError(err.message)
    }finally{
      setTimeout(() => {
        setLoader(false)
      }, 3000);
      
    }
    

  };

  useEffect(() => {
    getData();
  }, []);


  const handleSubmitBtn =(e)=>{
  e.preventDefault()
  
  }

  return (
    <>
      <h1>React CRUD</h1>
    
      {
        loader?".........is loading":error?(<h1>{error}</h1>):(apiData.map((user) => ( <div
          key={user.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>{user.password}</p>
                        </div>)) )
      }

     <form onSubmit={handleSubmitBtn}>
        <input
          type="text"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button >Submit</button>
      </form>

      <hr />
    </>
  );
};

export default Timer;
  