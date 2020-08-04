import styled from "@emotion/styled";

const bgWhite = `249,252,255`;
const deepPurple = `36,15,82`;
const purple = `98,54,255`;
const green = `28,177,66`;
const orange = `255,100,0`;
const red = `249,52,94`;
const shadow = `129,124,155`;

export const HeaderContainer = styled.header`
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 0px 40px 15px;
  }
`;

export const NavLi = styled.li`
  background: rgb(${bgWhite});
  position: relative;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    padding: 10px 40px;
    color: rgba(${deepPurple});

    img {
      margin-bottom: 8px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  &.active {
    &::before,
    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 100px;
      background: rgb(${deepPurple});
      position: absolute;
      bottom: 0px;
      top: auto;
    }

    &::before {
      border-radius: 0px 0px 20px 0px;
      left: -5px;
      right: auto;
    }

    &::after {
      border-radius: 0px 0px 0px 20px;
      right: -5px;
      left: auto;
    }
  }

  @media (min-width: 768px) {
    a {
      padding: 50px 25px;
    }

    &.active {
      &::before,
      &::after {
        width: 120px;
        height: 30px;
        right: 0px;
        left: auto;
      }

      &::before {
        border-radius: 0px 0px 20px 0px;
        top: 0px;
        bottom: auto;
      }

      &::after {
        border-radius: 0px 20px 0px 0px;
        bottom: 0px;
        top: auto;
      }
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: 35px;
  font-weight: 400;
  color: rgb(${deepPurple});
  margin-bottom: 30px;

  b {
    /* display: block; */
    font-weight: 600;
    color: rgb(${purple});
    margin-right: 25px;
  }

  @media (min-width: 7638px) {
    margin-bottom: 50px;
  }
`;

export const GolbalCard = styled.div`
  background: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 10px 10px 30px rgba(${shadow}, 0.15);
  border-radius: 40px;
  min-width: 270px;

  h2 {
    font-size: 18px;
    color: rgba(${deepPurple});
  }

  p {
    font-weight: 600;
    font-size: 40px;
    color: rgb(${purple});
    margin: 0px;
  }

  &.green p {
    color: rgb(${green});
  }

  &.orange p {
    color: rgb(${orange});
  }

  &.red p {
    color: rgb(${red});
  }
  & + div {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    & + div {
      margin-top: 0px;
    }
  }
`;
