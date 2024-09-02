import React from 'react';
import { ChakraProvider, Box, Stack, Heading, Button,TableContainer,Table,Thead,Tbody,Tr,Td,Th, Flex, Center,Spacer } from '@chakra-ui/react';

const Group = () => {
  return (
    <ChakraProvider>
      <Box margin={'5rem'} >
     <Stack position={'d-flex'}  alignItems={'center'} direction={['column','row']} paddingTop={'2rem'} spacing={'2rem'} >
      <Heading>Groups</Heading>
      <Button size={'sm'} colorScheme={'blue'}>Add New</Button>
     </Stack>
     <Flex width={'100%'} paddingTop={'2rem'} >
     <Box width={'80%'} >
      <TableContainer>
        <Table variant={'simple'} border={'1px'}>
          <Thead backgroundColor={'#ccccff'}>
            <Tr>
              <Th>Group Name</Th>
              <Th>Members Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Front End Developers</Td>
              <Td >30</Td>
            </Tr>
            <Tr>
              <Td>Back End Developers </Td>
              <Td >25</Td>
            </Tr>
            <Tr>
              <Td>Team Falcon</Td>
              <Td >6</Td>
            </Tr>
            <Tr>
              <Td>Student Teams</Td>
              <Td >12</Td>
            </Tr>
            <Tr>
              <Td>Community Official Members</Td>
              <Td >10</Td>
            </Tr>
            <Tr>
              <Td>Team Dandelions</Td>
              <Td >6</Td>
            </Tr>
            <Tr>
              <Td>Mentors </Td>
              <Td >15</Td>
            </Tr>
          </Tbody>
          <Spacer></Spacer>

        </Table>
      </TableContainer>
     </Box>
     </Flex>
     </Box>
     
    </ChakraProvider>
  );
};

export default Group;
