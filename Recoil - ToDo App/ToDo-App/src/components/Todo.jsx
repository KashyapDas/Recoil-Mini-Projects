// -----------------Using if else Statement-------------------------------------------------------

// import React from "react";
// import style from "./regular.module.css";
// import { useRecoilValue } from "recoil";
// import { filterStoreData, todoStore } from "../store/atoms/todoStore";
// import NotFound from "./NotFound";
// import Notmatching from "./Notmatching";

// function Todo() {
//   const todos = useRecoilValue(todoStore);
//   const filter = useRecoilValue(filterStoreData);

//   //   console.log("Todo Render");

//   function renderContent() {
//     if (todos.length > 0) {
//       if (filter.length > 0) {
//         // Check if the filter string is matched with the todos title or not.
//         let check = todos.filter((items) => {
//           let title = items.title;
//           if (title.startsWith(filter)) {
//             // console.log("Matching");
//             return true;
//           } else {
//             return false;
//           }
//         });
//         // If we search and doesn't match then show "Element Not Found"
//         if (check.length == 0) {
//           return <Notmatching/>;
//         } //I Id we search and match then return all those matching element
//         else {
//           return (
//             <div className="w-screen h-[80vh] flex flex-wrap p-2 gap-5 pl-11 pt-5">
//               {check.map((items, index) => (
//                 <div
//                   key={index}
//                   className={`cards ${style.borderAll} w-56 h-64 rounded-md p-2`}
//                 >
//                   <h1
//                     className={`text-xl font-extrabold text-center h-1/5 overflow-scroll ${style.hidden}`}
//                   >
//                     {items.title}
//                   </h1>
//                   <h2
//                     className={`text-lg font-semibold h-4/5 overflow-scroll ${style.hidden}`}
//                   >
//                     {items.description}
//                   </h2>
//                 </div>
//               ))}
//             </div>
//           );
//         }
//       } // If we not enter anything in the filter and then fecth all the todos element
//       else {
//         return (
//           <div className="w-screen h-[80vh] flex flex-wrap p-2 gap-5 pl-11 pt-5">
//             {todos.map((items, index) => (
//               <div
//                 key={index}
//                 className={`cards ${style.borderAll} w-56 h-64 rounded-md p-2`}
//               >
//                 <h1
//                   className={`text-xl font-extrabold text-center h-1/5 overflow-scroll ${style.hidden}`}
//                 >
//                   {items.title}
//                 </h1>
//                 <h2
//                   className={`text-lg font-semibold h-4/5 overflow-scroll ${style.hidden}`}
//                 >
//                   {items.description}
//                 </h2>
//               </div>
//             ))}
//           </div>
//         );
//       }
//     } else if (todos.length <= 0) {
//       return <NotFound />;
//     }
//   }

//   return (
//     <div>
//       {renderContent()}
//     </div>
//   );
// }

// export default Todo;


// -----------------------Using Ternary Operator--------------------------------------------------------
import React from "react";
import style from "./regular.module.css";
import { useRecoilValue } from "recoil";
import { filterStoreData, todoStore } from "../store/atoms/todoStore";
import NotFound from "./NotFound";
import Notmatching from "./Notmatching";

function Todo() {
  const todos = useRecoilValue(todoStore);
  const filter = useRecoilValue(filterStoreData);
  console.log("Todo Rendered...");

  // Common card component to avoid repetition
  const TodoCard = ({ items, index }) => (
    <div
      key={index}
      className={`cards ${style.borderAll} w-56 h-64 rounded-md p-2`}
    >
      <h1
        className={`text-xl font-extrabold text-center h-1/5 overflow-scroll ${style.hidden}`}
      >
        {items.title}
      </h1>
      <h2
        className={`text-lg font-semibold h-4/5 overflow-scroll ${style.hidden}`}
      >
        {items.description}
      </h2>
    </div>
  );

  return (
    <div>
      {todos.length <= 0 ? (
        <NotFound />
      ) : filter.length > 0 ? (
        (() => {
          const filteredTodos = todos.filter((items) =>
            items.title.startsWith(filter)
          );

          return filteredTodos.length > 0 ? (
            <div className="w-screen h-[80vh] flex flex-wrap p-2 gap-5 pl-11 pt-5">
              {filteredTodos.map((items, index) => (
                <TodoCard key={index} items={items} index={index} />
              ))}
            </div>
          ) : (
            <Notmatching/>
          );
        })()
      ) : (
        <div className="w-screen h-[80vh] flex flex-wrap p-2 gap-5 pl-11 pt-5">
          {todos.map((items, index) => (
            <TodoCard key={index} items={items} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;