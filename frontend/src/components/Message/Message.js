import styles from "./Message.module.css";

const Message = ({ msg, bgColor }) => {

  return (
    <article className={styles.containerMessage}>
      <div className={`${styles.body} ${bgColor}`}>
        <p dangerouslySetInnerHTML={{__html: msg}} />
      </div>
    </article>
  )
};

export default Message;
