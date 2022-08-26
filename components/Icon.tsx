import Link from "next/link";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";

type Icon = {
  children: any;
  reference: string;
  copyValue?: boolean;
};

const notify = () => {
  toast.remove(),
    toast.success("Copied to clipboard", {
      style: {
        background: "#0f1012",
        color: "#fff",
        fontSize: "1em",
      },
    });
};

export const Icon = ({ children, reference, copyValue }: Icon) => {
  if (copyValue) {
    return (
      <a
        className={`cursor-pointer`}
        onClick={() => {
          notify(), copy(reference);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={reference}>
      <a target="_blank" className={`cursor-pointer`}>
        {children}
      </a>
    </Link>
  );
};
