import { GetServerSideProps } from "next";
import FadeIn from "react-fade-in";
type ErrorPage = {
  statusCode: number;
  message: string;
};

export default function ({ statusCode, message }: ErrorPage) {
  return (
    <FadeIn>
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div>
          <h1 className="font-semibold text-2xl inline-block mr-[1.7rem] pr-[1.5rem] border-r-[1px] border-white">
            {statusCode}
          </h1>
          <div className="inline-block text-left">
            <h2 className="text-lg font-extralight">{message}</h2>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { res, err }: any = props;

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  let entries: any = {
    404: "Az oldal nem található",
    400: "Érvénytelen kérelem",
    500: "Szerveroldali hiba",
  };
  const message = entries[statusCode];

  return {
    props: {
      statusCode,
      message,
    },
  };
};
