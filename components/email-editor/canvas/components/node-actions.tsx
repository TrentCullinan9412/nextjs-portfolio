import { useContext } from "react";
import EmailContext from "../../context";
import { ArrowTopLeftIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  moveable: boolean;
  removeable: boolean;
  nodeId: string;
};

export function NodeActions({ nodeId, moveable, removeable }: Props) {
  const { remove, moveOut } = useContext(EmailContext);

  if (!moveable && !removeable) return null;

  return (
    <TooltipProvider>
      <div className="absolute top-0 left-[-2.5rem] bg-primary rounded-md flex flex-col z-50">
        {removeable && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(nodeId);
                }}
              >
                <TrashIcon className="h-4 w-4 text-primary-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        )}

        {moveable && (
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  moveOut(nodeId);
                }}
              >
                <ArrowTopLeftIcon className="h-4 w-4 text-primary-foreground" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Move to parent</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}
