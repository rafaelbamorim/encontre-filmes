import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Card } from "../../components/Card";

import { api } from "../../services/api";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}
export function Home() {
  const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [noResults, setNoResults] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    setLoading(true);
    const response = await api.get("/movie/popular", {
      params: {
        page,
      },
    });
    setDiscoverMovies([...discoverMovies, ...response.data.results]);
    setPage(page + 1);
    setLoading(false);
  };

  const searchMovies = async (query: string) => {
    setLoading(true);
    const response = await api.get("/search/movie", {
      params: {
        query,
      },
    });
    if (response.data.results.length === 0) {
      setNoResults(true);
    } else {
      setSearchResults(response.data.results);
    }
    setLoading(false);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.length > 2) {
      searchMovies(text);
    } else {
      setSearchResults([]);
    }
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <Card
      data={item}
      onPress={() => {
        navigation.navigate("Details", { movieId: item.id });
      }}
    />
  );

  const movieData = search.length > 2 ? searchResults : discoverMovies;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>O que você quer assistir?</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor="#fff"
          value={search}
          onChangeText={handleSearch}
        />
        <MagnifyingGlass color="#FFF" size={25} weight="light" />
      </View>
      <View>
        <FlatList
          data={movieData}
          numColumns={3}
          renderItem={renderMovieItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 35,
            paddingBottom: 170,
          }}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => loadMoreData()}
          onEndReachedThreshold={0.5}
        />
        {noResults && (
          <Text style={styles.noResultsText}>
            Nenhum filme encontrado para "{search}"
          </Text>
        )}
        {loading && <ActivityIndicator size={50} color="#0296E5" />}
      </View>
    </View>
  );
}
