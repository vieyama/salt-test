import styled from "@emotion/styled";

export const BannerStyled = styled.div`
  height: 30vh;
  background: url("/assets/Hero-Image.png");
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .left-triangle {
    position: absolute;
    width: 0;
    height: 147px;
    border-bottom: 153px solid #4097db;
    border-right: 100vw solid transparent;
    &:after {
      background: #4097db;
      content: "";
      height: 240px;
      position: absolute;
      width: 100vw;
      top: 270px;
    }
  }

  .right-triangle {
    width: 0;
    height: 147px;
    border-bottom: 153px solid #53a7e9;
    border-left: 100vw solid transparent;
  }

  .content {
    position: absolute;
    top: 37vh;

    @media only screen and (max-width: 434px) {
      top: 32vh;
    }
  }

  .scroll {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: white;
    top: 540px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: -1px 3px 5px 2px rgba(204, 186, 186, 0.61);
    -webkit-box-shadow: -1px 3px 5px 2px rgba(204, 186, 186, 0.61);
    -moz-box-shadow: -1px 3px 5px 2px rgba(204, 186, 186, 0.61);
  }
`;
