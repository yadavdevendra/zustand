// import create from "zustand";
 
// const useStore = create((set)=>({
//     counter:0,
//     increaseCounter:()=> set(state => ({counter:state.counter + 1})),
//     decreaseCounter:()=> set(state => ({counter:state.counter - 1})),
//     increaseBy:(num)=> set(state => ({counter:state.counter + num})),
//     decreaseBy:(num)=> set(state => ({counter:state.counter - num})),
//     resetCounter:()=> set((state) => ({counter:0}))
// }))
// export default useStore;

import create from "zustand";
 const initialstate ={
    counter: 0,
 };
const useStore = create((set)=>({
    ...initialstate,
    increaseCounter:()=> set(state => ({counter:state.counter + 1})),
    decreaseCounter:()=> set(state => ({counter:state.counter - 1})),
    increaseBy:(num)=> set(state => ({counter:state.counter + num})),
    decreaseBy:(num)=> set(state => ({counter:state.counter - num})),
    resetCounter:()=> set(initialstate)
}))
export default useStore;