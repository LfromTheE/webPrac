class StackJs {
  storage;
  count;
 
   constructor() {
     this.storage = {};
     this.count = 0;
   }
 
   // StackJs의 크기(데이터의 개수)를 알 수 있어야 합니다.
   size() {
     return Number(this.count)
   }
 
   // StackJs에 데이터를 넣을 수 있어야 합니다.
   push(element) {
     this.storage[this.count] = element
     this.count++
   }
 
   // StackJs에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
   pop() {
     if(this.count == 0){
       throw new RangeError('꺼낼 값이 더 이상 없습니다.')
     }

     let output = this.storage[this.count -1]
     delete this.storage[this.count -1]
     this.count--;
     return output
   }
 }
 
 try{
   let steak = new StackJs;
 
   steak.push('A')
   console.log(steak)
   console.log(steak.size())
 
   steak.push('B')
   console.log(steak)
   console.log(steak.size())
 
   console.log(steak.pop())
   console.log(steak)
   console.log(steak.size())
 
   console.log(steak.pop())
   console.log(steak.size())
 
   console.log(steak.pop())
   console.log(steak.size())
 
   steak.pop()
   console.log(steak.size())
   
 }catch(error){
   console.log('Error', error.message)
 
 }



