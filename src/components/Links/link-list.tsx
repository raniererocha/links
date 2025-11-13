import { ScrollArea } from "@radix-ui/react-scroll-area";
import type { PropsWithChildren } from "react";


export function LinkList({children}: PropsWithChildren) {
    return (
         <section className="h-[38%] md:h-[35%] ">
        <ScrollArea className="h-full py-4 px-6">
          <div className="flex flex-col gap-1">
            {children}
          </div>
        </ScrollArea>
      </section>
    )
}