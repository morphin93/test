import { Box, Text } from '@chakra-ui/react';
import { CollectionInfoBox } from './CollectionInfoBox';
import { chainType, networkConfig } from '../config/network';
import { shortenHash } from '../utils/shortenHash';
import { useElvenScQuery } from '../hooks/interaction/elvenScHooks/useElvenScQuery';
import { SCQueryType } from '../hooks/interaction/useScQuery';

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;

export const Hero = () => {
  const { data: collectionSize, isLoading: collectionSizeLoading } =
    useElvenScQuery<number>({
      funcName: 'getTotalSupply',
      type: SCQueryType.NUMBER,
    });

  const { data: totalTokensLeft, isLoading: totalTokensLeftIsLoading } =
    useElvenScQuery<number>({
      type: SCQueryType.NUMBER,
      funcName: 'getTotalTokensLeft',
    });

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  const minted =
    collectionSize && totalTokensLeft ? collectionSize - totalTokensLeft : 0;

  return (
    <Box width="100%">
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="black"
        lineHeight="shorter"
        mb={5}
      >
        Mint an{' '}
        <Text
          as="a"
          color="elvenTools.color3.base"
          href="https://www.elrond.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Apes Football Crew
        </Text>{' '}
        and{' '}
        <Text
          as="a"
          color="elvenTools.color2.base"
          href="https://www.elrond.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Win ESDT !
        </Text>{' '}
        
      </Text>
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="thin"
        textAlign={{ base: 'center', md: 'left' }}
      >
        Description Du projet ....
      </Text>
      <Box
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        mt={10}
        gap={3}
        sx={{
          '@media screen and (max-width: 650px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CollectionInfoBox
          content={collectionTicker || '-'}
          label="Collection ticker. Click for details."
          isLoading={collectionTickerLoading}
          href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={
            smartContractAddress
              ? shortenHash(smartContractAddress || '', 12)
              : 'No minter smart contract provided!'
          }
          label={`Minter smart contract. Click for details.`}
          href={
            smartContractAddress
              ? `${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`
              : undefined
          }
        />
        <CollectionInfoBox
          content={`${minted} / ${collectionSize || 0}`}
          isLoading={collectionSizeLoading || totalTokensLeftIsLoading}
          label="Minted per collection supply"
        />
      </Box>
    </Box>
  );
};
