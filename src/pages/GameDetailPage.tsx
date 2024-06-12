import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components /ExpandableText";
import GameAttributes from "../components /GameAttributes";
import GameTrailer from "../components /GameTrailer";
import useGame from "../hooks/useGame";

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
      <ExpandableText>{cleanHtml(game.description)}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
