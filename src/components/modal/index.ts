import ModalComponent from './Modal';
import Container from './subcomponents/Container';
import Content from './subcomponents/Content';
import Description from './subcomponents/Description';
import Footer from './subcomponents/Footer';
import Header from './subcomponents/Header';
import Title from './subcomponents/Title';
import Trigger from './subcomponents/Trigger';

const Modal = Object.assign(ModalComponent, {
  container: Container,
  trigger: Trigger,
  header: Header,
  footer: Footer,
  title: Title,
  description: Description,
  content: Content
});

export default Modal;
