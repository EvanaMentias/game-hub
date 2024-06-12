import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  const cleanHtml = (htmlString: string): string => {
    const regex = /(<([^>]+)>)/gi;
    return htmlString.replace(regex, "");
  };
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{cleanHtml(game.description)}</Text>
    </>
  );
};

export default GameDetailPage;
