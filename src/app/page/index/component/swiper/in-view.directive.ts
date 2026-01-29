import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

// 這裡的一切都建立在： 我對某個元素寫了 #inView
// Directive (指令)

@Directive({
    // 要用在 HTML 就要寫 inView
    selector: '[inView]',
    standalone: true,
})
export class InViewDirective implements OnDestroy {
    // 我在定義一個新的事件，這個事件叫做 visible ，他會對外丟東西一個布林值。
    @Output() visible = new EventEmitter<boolean>();

    // 我這個指令內部會用到一個 IntersectionObserver 物件，我稱之為io。
    private io: IntersectionObserver;

    // 當這個指令建立後，立刻執行！
    // 這個指令掛在誰身上，我就用ElementRef把他包起來使用。
    // 我的對象會是HTML的Element，因此使用ElementRef<HTMLElement>。
    // 而這個被操作的對象，我稱其為 el，el是一個私人變數，不傳出去的。
    constructor(private el: ElementRef<HTMLElement>) {
        // 這個指令的 io ，我拿來做一個新的監測器，只要他收到e(Entry)物件。
        // 我馬上讓visible發射布林值！
        this.io = new IntersectionObserver(([e]) => {
            // visible會發射布林值，e物件的isIntersecting(布林值)！
            this.visible.emit(e.isIntersecting);
        });

        // 我的 io 要監視的是 el 他的真正 HTML 元素(nativeElement)
        this.io.observe(this.el.nativeElement);
    }

    // 指令結束時，把IntersectionObserver關掉
    ngOnDestroy() {
        this.io.disconnect();
    }
}

