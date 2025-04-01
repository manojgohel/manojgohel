import { Button } from "@/components/ui/button";

export default function PageTitle({ title, onAddNew, subTitle, children }) {
  return (
    <div className="flex flex-row justify-between items-center gap-4 pb-4">
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-sm">{subTitle}</h1>
      </div>
      <div className="flex gap-2">
        {children}
        {onAddNew && (
          <Button
            onClick={onAddNew}
            className="bg-zinc-800 text-white hover:bg-zinc-700 shadow-md rounded-md px-4 py-2"
          >
            Add New
          </Button>
        )}
      </div>
    </div>
  );
}
