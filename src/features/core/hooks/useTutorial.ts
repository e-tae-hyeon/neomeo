import { useStorageObjectWithDefault } from "@/src/common/storage";

const keys = ["question", "diary", "letter"] as const;

type TutorialType = (typeof keys)[number];

function useTutorial() {
  const KEY = "k_tutorial";

  const [tutorialDoneMap, setTutorialDoneMap] = useStorageObjectWithDefault<
    Record<TutorialType, boolean>
  >(KEY, {
    question: false,
    diary: false,
    letter: false,
  });

  const checkDoneTutorial = (type: TutorialType) => {
    return tutorialDoneMap[type];
  };

  const doneTutorial = (type: TutorialType) => {
    setTutorialDoneMap({ ...tutorialDoneMap, [type]: true });
  };

  return { checkDoneTutorial, doneTutorial };
}

export default useTutorial;
