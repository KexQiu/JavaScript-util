//判断传入的对象是否为空
//为空返回true

const DeterminingEmptyObjects:(target: Object) => boolean  = target => {
    //判断target是否是对象，如果不是则抛出异常
    let type: string = Object.prototype.toString.call(target)
    if( !type.includes('Object') ) throw new Error('target is not a Object !')
    //获取target的参数数量
    let params: (string | symbol)[] = Reflect.ownKeys(target)
    return params.length === 0
}

export default DeterminingEmptyObjects