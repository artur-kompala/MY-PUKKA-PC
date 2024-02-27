import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { deleteItemCart } from "../../services/apiCart";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useState } from "react";
import QuanityBox from "./QuanityBox";

function CartRow({ cart, list, isLoading, refetch, counter, setCounter }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  function chooseComponent(component) {
    switch (component) {
      case "cpu":
        navigate("/cpu");
        break;
      case "cooler":
        navigate("/cpu-cooler");
        break;
      case "mobo":
        navigate("/mobo");
        break;
      case "gpu":
        navigate("/gpu");
        break;
      case "memory":
        navigate("/ram");
        break;
      case "psu":
        navigate("/psu");
        break;
      case "cas":
        navigate("/case");
        break;
      case "fan":
        navigate("/case-fan");
        break;
      case "storage":
        navigate("/storage");
        break;
      case "os":
        navigate("/os");
        break;
      default:
        break;
    }
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  for (const type in cart) {
    if (type === list) {
      return (
        <Table.Row>
          <div>{t(list)}</div>
          <div onClick={() => navigate(`/product/${cart[type].gid}?name=${cart[type].name}&manufacture=${cart[type].manufacture}&rank=${cart[type]?.rank}&samples=${cart[type]?.samples}&score=${cart[type]?.benchmark}`)}>
            {cart[type].manufacture + " " + cart[type].name}
          </div>
          {list === "memory" ? (
            <QuanityBox
              counter={counter}
              setCounter={setCounter}
              index={0}
            ></QuanityBox>
          ) : list === "fan" ? (
            <QuanityBox
              counter={counter}
              setCounter={setCounter}
              index={1}
            ></QuanityBox>
          ) : (
            <div></div>
          )}
          <div>{cart[type].price} PLN</div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cart[type]._id} />

              <Menus.List id={cart[type]._id}>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>{t("delete")}</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete
                  refetch={refetch}
                  resourceName={`${list}`}
                  onConfirm={() => deleteItemCart(list, refetch)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </Table.Row>
      );
    }
  }

  return (
    <Table.Row>
      <div>{t(list)}</div>
      <Button onClick={() => chooseComponent(list)}>{t("choose")}</Button>
    </Table.Row>
  );
}

export default CartRow;
