"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CommonDialog = ({
    actionButtonText = "Add",
    buttonIcon: IconComponent,  // Renamed to indicate it's a component
    title = "Title",
    children,
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant={IconComponent ? "ghost" : "outline"}>
                    {IconComponent && <IconComponent className="h-4 w-4 mr-1" />}
                    {actionButtonText && actionButtonText}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default CommonDialog;