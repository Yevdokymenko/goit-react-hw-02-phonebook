import { Button, Wrapper, Title } from './NavBar.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';

const NavBar = ({ toggle, isOpenFilter, isOpenForm }) => {
  return (
    <Wrapper>
      <Title>PHONEBOOK by MR.Y</Title>
      <Button
        onClick={() => toggle('isOpenForm')}
        isOpen={isOpenForm}
        title="Add contact"
        type="button"
      >
        <RiUserAddLine />
      </Button>
      <Button
        onClick={() => toggle('isOpenFilter')}
        isOpen={isOpenFilter}
        title="Search"
        type="button"
      >
        <RiUserSearchLine />
      </Button>
    </Wrapper>
  );
};

export default NavBar;
