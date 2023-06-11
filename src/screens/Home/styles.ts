import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#1E1E1E",
  },
  noResultsText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginVertical: -70,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3A3F47",
    height: 42,
    padding: 10,
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 20,
  },
  input: {
    color: "#fff",
    width: "80%",
  },
  headerText: {
    marginTop: 30,
    fontSize: 24,
    lineHeight: 45,
    color: "#fff",
    fontWeight: "bold",
  },
  scrollCard: {
    width: "100%",
    height: "100%",
  },
  cardImage: {
    width: 145,
    height: 210,
    borderRadius: 15,
  },
  cardMovies: {
    width: 145,
    height: 210,
    borderRadius: 15,
    marginRight: 20,
    backgroundColor: "#424242",
  },
  search: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  searchText: {
    color: "#fff",
  },
  scrollCardSearch: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  });
