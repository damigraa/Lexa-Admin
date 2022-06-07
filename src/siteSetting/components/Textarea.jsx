// import React from 'react';


// const ProfileStatusHuk = (props) => {

//   const [editMode, setEditMode] = React.useState(false)
//   const [status, setStatus] = React.useState(props.status)

//   React.useEffect(() => {
//     setStatus(props.status);
//   }, [props.status])


//   const activateEditMode = () => {
//     setEditMode(true)
//   }

//   const deactivateEditMode = () => {
//     setEditMode(false);
//     props.updateStatus(status);
//   }

//   const onStatusChange = (e) => {
//     setStatus(e.currentTarget.value)

//   };


//   return (
//     <div>
//       {!editMode &&
//         <div>
//           <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
//         </div>
//       }
//       {editMode && (
//         <div>
//           <input
//             onChange={onStatusChange}
//             autoFocus={true}
//             onBlur={deactivateEditMode}
//             value={status}
//           />
//         </div>
//       )}
//     </div>
//   );
// }


// export default ProfileStatusHuk;
