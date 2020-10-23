/* es2020 空值 */

function foo(title) {
    //let msg = title || 'hello world';
    let msg = title ?? 'hello world';

    console.log(msg);
}

foo(123);
foo(0);
foo(false);
foo('');
foo();