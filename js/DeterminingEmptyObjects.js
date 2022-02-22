/**
 * @description 判断空对象
 * @param target 想要判断的对象
 * @returns 判断结果（ture 为空对象， false 为非空对象）
 */

const DeterminingEmptyObjects = target => {
    //判断target是否是对象，如果不是则抛出异常
    let type = Object.prototype.toString.call(target)
    if( !type.includes('Object') ) throw new Error('target is not a Object !')
    //获取target的参数数量
    let params = Reflect.ownKeys(target)
    return params.length === 0
}

export default DeterminingEmptyObjects