/**
 * @description 防抖
 * @param {*} fn 想要防抖包裹的函数
 * @param {*} delay 延迟执行的毫秒数
 * @param {*} immediate 是否立即执行（true：是，false：否）
 * @returns 放回加工后的函数
 */

const debounceNow = (fn, delay, immediate) => {
    // 创建一个变量用于储存计时器，由于闭包，不会被垃圾回收机制回收
    let timeout
    // 用于标记是否已经执行过函数
    let canDo = true
    return (...args) => {
        // 绑定this
        const self = this
        // 立即执行一次，并将标记取反
        if(immediate && canDo) {
            canDo = !canDo
            fn.call(self, ...args)
        }
        // 若之前有过定时器则清除定时器
        if(timeout) clearTimeout(timeout)
        // 绑定定时器
        timeout = setTimeout(()=>{
            if (immediate) {
                canDo = !canDo
            } else {
                fn.call(self, ...args)
            }
        },delay)
    }
}

export default debounceNow