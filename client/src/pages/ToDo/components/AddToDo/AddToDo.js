import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components";

function AddToDo({ todolist, setTodolist }) {
    const [add, setAdd] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeAdd = () => {
        setAdd(!add);
    };
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onClickAddButton = () => {
        setTodolist([...todolist, { id: todolist.length + 1, title, content }]);
        setAdd(false);
    };

    return (
        <Layout>
            {add ? (
                <AddForm>
                    <Input
                        onChange={onChangeTitle}
                        type="text"
                        placeholder="작업이름"
                    />
                    <Input
                        onChange={onChangeContent}
                        type="text"
                        placeholder="설명"
                    />
                    <ButtonDiv>
                        <CancelButton onClick={onChangeAdd}>취소</CancelButton>
                        <AddButton onClick={onClickAddButton}>
                            작업 추가
                        </AddButton>
                    </ButtonDiv>
                </AddForm>
            ) : (
                <PlusButton type="button" onClick={onChangeAdd}>
                    <BsPlus />
                    <p>작업추가</p>
                </PlusButton>
            )}
        </Layout>
    );
}
const Layout = styled.div`
    margin-top: 20px;
`;
const AddForm = styled.div`
    width: 700px;
    border: 1px solid hsla(220, 9%, 46%, 0.3);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    outline: none;
    border: 0px solid #fff;
    margin-bottom: 10px;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button {
        border: 1px solid hsla(220, 9%, 46%, 0.3);
        border-radius: 5px;
        text-align: center;
        margin-left: 10px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
    }
`;
const CancelButton = styled.button`
    width: 60px;
    background-color: #fff;
    &:hover {
        background-color: hsla(220, 9%, 46%, 0.08);
    }
`;
const AddButton = styled.button`
    width: 80px;
    color: #fff;
    background-color: #9d3fd0;
    &:hover {
        background-color: #7828a3;
    }
`;

const PlusButton = styled.button`
    margin-top: 20px;
    background-color: inherit;
    border: inherit;
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #9d3fd0;
    font-weight: bold;
    cursor: pointer;
    & > p {
        margin-left: 5px;
        font-size: 16px;
    }
    &:hover {
        color: #7828a3;
    }
`;

export default AddToDo;