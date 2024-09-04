import { Container, Row, Col } from 'react-bootstrap';

import Logo from "../assets/img/logo.svg";

export default function Footer() {
  return (
    <div className='bg-light'>
        <Container className='text-center pt-5 mt-5' style={{fontSize:"10px"}}>
            <Row>
                <Col>
                    <p>
                        Beautiful Home Store Ltd. <br />
                        Address
                        <br />
                        Beautiful.home@store.com <br />
                        (51)4000-0001 | (51)9999-9999
                    </p>
                </Col>

                <Col>
                    <img
                        src={Logo}
                        alt="logotipo da Beautiful Home Store"
                        width={150}
                    />
                </Col>
            </Row>
            <p className='py-4'>© 2024. All rights reserved.</p>
        </Container>
    </div>    
  );
};