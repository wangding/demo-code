/* 
 * 发布/订阅模式的实现
 * 参考：https://zhuanlan.zhihu.com/p/351750593，https://zhuanlan.zhihu.com/p/51357583
 */
class Publisher {
  constructor(id, bkr) {
    this.id = id;
    this.bkr = bkr;
    bkr.register(this);
  }

  publish(msg) {
    msg.publisher = this.id;
    this.bkr.publish(msg);
  }
}

class Broker {
  constructor() {
    this.pubs = [];
    this.subs = [];
    this.msgs = [];
    this.subMsgs = [];
  }

  register(guy) {
    if(guy instanceof Subscriber) this.subs.push(guy);
    if(guy instanceof Publisher) this.pubs.push(guy);
  }

  publish(msg) {
    this.msgs.push(msg);
    this.subMsgs.forEach( subMsg => {
      if(subMsg.topic === msg.topic) {
        this.getSub(subMsg.subscriber).receive(msg);
      }
    });
  }

  subscribe(msg) {
    this.subMsgs.push(msg);
  }

  getSub(subId) {
    for(let i=0; i<this.subs.length; i++) {
      if(this.subs[i].id === subId) return this.subs[i];
    }
  }
}

class Subscriber {
  constructor(id, bkr) {
    this.id  = id;
    this.bkr = bkr;
    bkr.register(this);
  }

  subscribe(msg) {
    msg.subscriber = this.id;
    this.bkr.subscribe(msg);
  }

  receive(msg) {
    console.log(`I am ${this.id} and received`, msg);
  }
}

// 创建中间商
let bkr = new Broker();

// 创建发布者，并在中间商处登记
let pub1 = new Publisher('#pub1', bkr),
    pub2 = new Publisher('#pub2', bkr);

// 创建订阅者，并在中间商处登记
let sub1 = new Subscriber('#sub1', bkr),
    sub2 = new Subscriber('#sub2', bkr),
    sub3 = new Subscriber('#sub3', bkr);

sub1.subscribe({topic: 'A'});
sub2.subscribe({topic: 'A'});
sub2.subscribe({topic: 'B'});
sub3.subscribe({topic: 'B'});

pub1.publish({topic: 'A'});
pub1.publish({topic: 'B'});
pub2.publish({topic: 'B'});
