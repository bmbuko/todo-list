import styled from "styled-components";

const LinkedElement = styled.a`
font-weight:700;
background:#EEE;
display:inline-block;
padding:1rem;
text-transform:uppercase;
user-select:none;
font-family:Arial,sans-serif;
border:1px solid #CCC;
border-radius:4px;
text-decoration:none;
text-align:center;
white-space:non-wrap;
width:${(props) => (props.fullWidth ? "100%" : "auto")};
color:${(props) => (props.disabled ? "#999" : "#222")};
  cursor:${(props) => (props.disabled ? "not-allowed" : "pointer")};




&:hover{
  background:${(props) => (props.disabled ? "#EEE" : "#BBB")};
}
&:active{
  background:${(props) => (props.disabled ? "#EEE" : "#999")};
}`;

const Link = (props) => {
  const { children, disabled, url,fullWidth } = props;
  return (
    <LinkedElement

      fullWidth={fullWidth}
      href={disabled ? undefined : url}
      disabled={disabled}
    >
      {children}
    </LinkedElement>
  );
};
export default Link;
