import { CreditCardOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {ABI, mainContractAddress} from "./transferConfigs";

const styles = {
  card: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  textWrapper: { maxWidth: "80px", width: "100%" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
};

function Transfer() {

  const [currentBalance, setCurrentBalance] = useState(0)
  const [beneficiaryTokenBalance, setBeneficiaryTokenBalance] = useState(0)
  const { Moralis, isAuthenticated, account } = useMoralis();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending] = useState(false);

  Moralis.enableWeb3();

  useEffect(() => {
    amount ? setTx({ amount }) : setTx();
  }, [amount]);

  async function enter() {
    const { amount } = tx;

    const options = {
      contractAddress: mainContractAddress,
      functionName: "BuyAllardTokens",
      msgValue: Moralis.Units.ETH(amount),
      abi: ABI
    };

    const receipt = await Moralis.executeFunction(options);
    console.log(receipt)
  }


  useEffect(() => {
    async function getBalance() {

      const options = {
        contractAddress: mainContractAddress,
        functionName: "TokensAvailable",
        abi: ABI
      };

      const receipt = await Moralis.executeFunction(options);
      setCurrentBalance(Moralis.Units.FromWei(receipt, 18).toFixed(2));
    }

    if (isAuthenticated) {
      getBalance();
    }
  }, [Moralis, isAuthenticated]);

  useEffect(() => {
    async function getBeneficiaryBalance() {

      const options = {
        contractAddress: mainContractAddress,
        functionName: "beneficiarys",
        params: {
          "" : account
        },
        abi: ABI
      };

      const receipt = await Moralis.executeFunction(options);
      console.log(receipt);
      setBeneficiaryTokenBalance(Moralis.Units.FromWei(receipt, 18).toFixed(2));
    }

    if (isAuthenticated) {
      getBeneficiaryBalance().catch(err => {
        console.log(err);
      });
    }
  }, [Moralis, isAuthenticated, account]);

  async function claim() {
    const options = {
      contractAddress: mainContractAddress,
      functionName: "Claim",
      abi: ABI
    };

    const receipt = await Moralis.executeFunction(options);
    console.log(receipt)
  }

  return (
    <div style={styles.card}>
      <div style={styles.tranfer}>
        <div style={styles.header}>
          <h3>Allard Tokens Available: {currentBalance}</h3>
        </div>
        <div style={styles.header}>
          <h3>Total purchased tokens: {beneficiaryTokenBalance}</h3>
        </div>
        <div style={styles.header}>
          <h3>Available to withdraw: {beneficiaryTokenBalance}</h3>
        </div>
        <div style={styles.select}>
          <div style={styles.textWrapper}>
            <Text strong>Amount:</Text>
          </div>
          <Input
            size="large"
            prefix={<CreditCardOutlined />}
            onChange={(e) => {
              setAmount(`${e.target.value}`);
            }}
          />
        </div>
        <Button
            type="primary"
            size="large"
            loading={isPending}
            style={{ width: "100%", marginTop: "25px" }}
            onClick={() => enter()}
            disabled={!tx}
        >
          Enter 💸
        </Button>
        <Button
            type="primary"
            size="large"
            loading={isPending}
            style={{ width: "100%", marginTop: "25px" }}
            onClick={() => claim()}
            disabled={!tx}
        >
          Claim 💸
        </Button>
      </div>
    </div>
  );
}

export default Transfer;
