import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Работники",
  description: "Поиск, добавление работника Метроэлектротранс",
};

const WorkersLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default WorkersLayout;
