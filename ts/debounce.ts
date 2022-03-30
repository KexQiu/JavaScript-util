/**
 * @description 防抖
 * @param {Function} fn 想要防抖包裹的函数
 * @param {number} delay 延迟执行的毫秒数
 * @param {boolean} immediate 是否立即执行（true：是，false：否）
 * @returns {Function} 放回加工后的函数
 */

export const debounce = (fn: Function, delay: number, immediate: boolean): Function => {
    // 创建一个变量用于储存计时器，由于闭包，不会被垃圾回收机制回收
    let timeout: any
    // 用于标记是否已经执行过函数
    let canDo: boolean = true
    return (...args: any[]) => {
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

export default debounce