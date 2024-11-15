/**
 * 
 * @returns https://react-simple-code-editor-gxsxdw.stackblitz.io
 */

export default function App() {
    const styles = {
      main: {
        display: "flex",
        flexDirection: "column",
        color: "#FFFFFF",
        height: "100vh",
        gap: "5px",
      },
      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#54D2EB",
        flexBasis: "5%",
      },
      footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FEA500",
        flexBasis: "5%",
      },
      body: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      },
      contentSection: {
        display: "flex",
        justifyContent: "space-between",
        flex: "0.8",
        gap: "4px",
      },
      relatedSection: {
        display: "flex",
        justifyContent: "space-between",
        flex: "0.2",
        gap: "3px",
      },
      sideContent: {
        display: "flex",
        flexDirection: "column",
        gap: "0.313rem",
        flex: "1",
      },
      hero: {
        backgroundColor: "#D7C9E3",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        flexBasis: "40%",
      },
      sidebar: {
        backgroundColor: "#9FC363",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        flex: "1",
      },
      mainContent: {
        backgroundColor: "#F5C632",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        flex: "1",
      },
      extraContent: {
        backgroundColor: "#898989",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        flexBasis: "30%",
      },
      relatedImages: {
        backgroundColor: "#2BB673",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
        flex: "0.8",
      },
      relatedPosts: {
        backgroundColor: "#F3CCDE",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px 0",
        flex: "0.2",
      },
    };
  
    return (
      <section style={styles.main}>
        <header style={styles.header}>Header</header>
        <main style={styles.body}>
          <section style={styles.contentSection}>
            <div style={styles.sideContent}>
              <div style={styles.hero}>Hero</div>
              <div style={styles.sidebar}>Sidebar</div>
            </div>
            <div style={styles.sideContent}>
              <div style={styles.mainContent}>Main Content</div>
              <div style={styles.extraContent}>Extra Content</div>
            </div>
          </section>
          <section style={styles.relatedSection}>
            <div style={styles.relatedImages}>Related Images</div>
            <div style={styles.relatedPosts}>Related Posts</div>
          </section>
        </main>
        <footer style={styles.footer}>Footer</footer>
      </section>
    );
  }