(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.main = global.main || {}, global.main.bundle = factory()));
}(this, (function () { 'use strict';

    class Stack{
        constructor( ) {
            this.items = {};
            this.count = 0;
        }

        isEmpty() {
            return this.count === 0;
        }

        push(element) {
            this.items[this.count] = element;
            this.count++;
        }

        pop(){
            if(this.isEmpty()) {
                return undefined;
            }
            this.count--;
            const rest = this.items[this.count];
            delete this.items[this.count];
            return rest;
        }

        peek(){
            if(this.isEmpty()) {
                return undefined;
            }
            return this.items[this.count - 1];
        }

        size(){
            return this.count -1;
        }

        clear() {
            this.items = {};
            this.count = 0;
        }

        toString() {
            if(this.isEmpty()) {
                return '';
            }

            let objString = `${this.items[0]}`;
            for (let i = 0; i < this.count; i++) {
                objString += `${objString}, ${this.items[i]}`;         
            }
            return objString;
        }


    }

    return Stack;

})));
