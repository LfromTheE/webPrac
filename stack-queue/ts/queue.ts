// 먼저 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Queue {
  private storage: { [key: number]: any };
  private front:number;
  private end:number;

constructor() {
  this.storage = {};
  this.front = 0;
  this.end = 0;
  }

  // queue의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size() {
      return this.end-this.front
  }

  // queue에 데이터를 넣을 수 있어야 합니다.
  enqueue(element:any) {
      this.storage[this.end] = element;
      this.end++;
  }

  // queue에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  dequeue() {
      if(this.end-this.front == 0){
          throw new RangeError('꺼낼 값이 더 이상 없습니다.')
      }
      let output = this.storage[this.front]
      delete this.storage[this.front]
      this.front++;
      return output;
  }
}

try{
  let steak = new Queue;
  steak.enqueue('A')
  console.log(steak)
  console.log(steak.size())
  console.log(typeof(Object.keys(steak)[0]))

  steak.enqueue('B')
  console.log(steak)
  console.log(steak.size())

  console.log(steak.dequeue())
  console.log(steak)
  console.log(steak.size())
  
  console.log(steak.dequeue())
  console.log(steak)
  console.log(steak.size())

  console.log(steak.dequeue())
  console.log(steak)
  console.log(steak.size())

  steak.dequeue()
  console.log(steak)
  console.log(steak.size())

}catch(error){
  console.log('Error', error.message)

}